import streamlit as st

st.set_page_config(page_title="GammaLex AI Copilot Demo", layout="wide")

st.title("GammaLex: AI Copilot for Pre-Auth, Denial Risk & Legal Justification")
st.markdown("""
A lean MVP demo of GammaLex's core features. All logic and data are mocked for demo purposes. Expandable for real API or LangChain integration.
""")

# --- Sidebar Navigation ---
feature = st.sidebar.radio(
    "Select a Feature Demo:",
    [
        "Viability Scoring (beta)",
        "Pre-Auth Writer",
        "Comply Draft",
        "Policy Lookup",
        "Ask Gamma (Chatbot)"
    ]
)

# --- Mock Logic Functions ---
def mock_viability(cpt, icd, note):
    if cpt == "99214" and "no imaging" in note.lower():
        return {
            "likelihood": "Low",
            "confidence": 0.55,
            "red_flags": ["No imaging documented for high-complexity visit"]
        }
    elif cpt == "77080":
        return {
            "likelihood": "High",
            "confidence": 0.92,
            "red_flags": []
        }
    else:
        return {
            "likelihood": "Medium",
            "confidence": 0.75,
            "red_flags": ["Missing prior auth history"]
        }

def mock_pre_auth_writer(cpt, icd, payer, rationale):
    if cpt == "77080":
        return f"Meets NCD 150.3: Bone density study is indicated for postmenopausal women at risk of osteoporosis. ICD-10: {icd}. Rationale: {rationale}"
    return f"No matching LCD/NCD found for CPT {cpt}. Please check payer policy. ICD-10: {icd}. Rationale: {rationale}"

def mock_comply_draft(writer_output):
    return f"**Justification for Pre-Auth/Appeal:**\n{writer_output}\n\n_This statement is ready for use in pre-auth forms, appeals, or legal review._"

def mock_policy_lookup(cpt):
    if cpt == "77080":
        return {
            "summary": "Covered under NCD 150.3 for postmenopausal women at risk of osteoporosis.",
            "frequency": "Once every 2 years",
            "docs": "Clinical note, risk factors, prior imaging",
            "source": "https://www.cms.gov/medicare-coverage-database/details/ncd-details.aspx?NCDId=256"
        }
    return {
        "summary": f"No NCD/LCD found for CPT {cpt}.",
        "frequency": "N/A",
        "docs": "N/A",
        "source": "https://www.cms.gov/medicare-coverage-database/"
    }

def mock_ask_gamma(question):
    if "77080" in question:
        return "Covered under NCD 150.3 for postmenopausal women."
    elif "denial" in question.lower():
        return "Common denial reasons: missing documentation, lack of medical necessity, frequency limits."
    return "I'm Gamma, your AI copilot. Ask about CPT coverage, denials, or policy rules!"

# --- Feature Demos ---
if feature == "Viability Scoring (beta)":
    st.header("Viability Scoring (beta)")
    cpt = st.text_input("CPT Code", "77080")
    icd = st.text_input("ICD-10 Code", "M81.0")
    note = st.text_area("Brief Clinical Note", "Postmenopausal woman, history of fracture.")
    if st.button("Score Viability"):
        result = mock_viability(cpt, icd, note)
        st.subheader(f"Approval Likelihood: {result['likelihood']}")
        st.write(f"Confidence: {int(result['confidence']*100)}%")
        if result['red_flags']:
            st.error("Red Flags: " + ", ".join(result['red_flags']))
        else:
            st.success("No red flags detected.")

elif feature == "Pre-Auth Writer":
    st.header("Pre-Auth Writer")
    cpt = st.text_input("CPT Code", "77080")
    icd = st.text_input("ICD-10 Code", "M81.0")
    payer = st.selectbox("Payer Type", ["Medicare", "Medicaid", "Commercial"])
    rationale = st.text_area("Clinical Rationale", "Patient is postmenopausal with risk factors for osteoporosis.")
    if st.button("Generate Medical Necessity Statement"):
        output = mock_pre_auth_writer(cpt, icd, payer, rationale)
        st.code(output)

elif feature == "Comply Draft":
    st.header("Comply Draft")
    writer_output = st.text_area("Paste Pre-Auth Writer Output", "Meets NCD 150.3: Bone density study is indicated for postmenopausal women at risk of osteoporosis. ICD-10: M81.0. Rationale: Patient is postmenopausal with risk factors for osteoporosis.")
    if st.button("Wrap for Submission"):
        st.markdown(mock_comply_draft(writer_output))

elif feature == "Policy Lookup":
    st.header("Policy Lookup")
    cpt = st.text_input("CPT Code or Keyword", "77080")
    if st.button("Lookup Policy"):
        info = mock_policy_lookup(cpt)
        st.subheader("Coverage Summary")
        st.write(info["summary"])
        st.write(f"**Frequency:** {info['frequency']}")
        st.write(f"**Documentation Required:** {info['docs']}")
        st.markdown(f"[Source Link]({info['source']})")

elif feature == "Ask Gamma (Chatbot)":
    st.header("Ask Gamma (Chatbot)")
    question = st.text_input("Ask a question about CPT coverage or denials", "Is CPT 77080 covered for osteoporosis?")
    if st.button("Ask Gamma"):
        st.info(mock_ask_gamma(question)) 