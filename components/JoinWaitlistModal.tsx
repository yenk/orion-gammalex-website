import { useState, useRef } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

export function JoinWaitlistModal({ trigger, className }: { trigger: React.ReactNode; className?: string }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [duplicate, setDuplicate] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });
  const nameRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setDuplicate(false);
    try {
      const res = await fetch("/api/join-waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSuccess(true);
        setForm({ name: "", email: "", phone: "", company: "", message: "" });
        setTimeout(() => {
          setOpen(false);
          setSuccess(false);
        }, 1800);
      } else if (res.status === 409 && data.message?.includes('already on the waitlist')) {
        setDuplicate(true);
        setTimeout(() => {
          setOpen(false);
          setDuplicate(false);
        }, 1800);
      } else {
        toast({ title: "Error", description: data.message, variant: "destructive" });
      }
    } catch (err) {
      toast({ title: "Error", description: "Something went wrong.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className={className}>
        <DialogHeader>
          <DialogTitle>Join the Waitlist</DialogTitle>
        </DialogHeader>
        {success ? (
          <div className="flex flex-col items-center justify-center py-8">
            <div className="text-3xl mb-2">🎉</div>
            <div className="text-lg font-semibold text-green-600 text-center">
              You've been added to the waitlist!
            </div>
            <div className="text-gray-500 text-center mt-2">
              We'll keep you updated as we roll out early access.
            </div>
          </div>
        ) : duplicate ? (
          <div className="flex flex-col items-center justify-center py-8">
            <div className="text-3xl mb-2">👋</div>
            <div className="text-lg font-semibold text-sage-600 text-center">
              Thanks for your interest! We've got you on record.
            </div>
            <div className="text-gray-500 text-center mt-2">
              You're already on the waitlist.
            </div>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <Input
              ref={nameRef}
              autoFocus
              type="text"
              placeholder="Name (optional)"
              value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              disabled={loading}
            />
            <Input
              type="email"
              placeholder="Email*"
              value={form.email}
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              required
              disabled={loading}
            />
            <Input
              type="tel"
              placeholder="Phone (optional)"
              value={form.phone}
              onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
              disabled={loading}
            />
            <Input
              type="text"
              placeholder="Company (optional)"
              value={form.company}
              onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
              disabled={loading}
            />
            <textarea
              placeholder="Message (optional)"
              value={form.message}
              onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 min-h-[80px]"
              disabled={loading}
            />
            <div className="flex justify-end gap-2 pt-2">
              <DialogClose asChild>
                <Button type="button" variant="ghost" disabled={loading}>Cancel</Button>
              </DialogClose>
              <Button type="submit" disabled={loading || !form.email} className="font-bold">
                {loading ? "Joining..." : "Join Waitlist"}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}