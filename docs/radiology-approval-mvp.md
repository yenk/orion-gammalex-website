# Radiology Imaging Approval Intelligence MVP

## Overview
Build a focused MVP for radiology imaging authorization that predicts approval risk and prevents denials before submission. This MVP will serve as the foundation for GammaLex's approval intelligence platform, with expansion to other specialties (oncology, cardiology) as the next phase.

## Target Modalities (MVP Focus)

### Phase 1: High-Volume, High-Pain-Point Imaging
1. **CT Scans** (especially body CT for trauma, pain, oncology staging)
   - High cost, evolving appropriateness criteria
   - Payer scrutiny around repeated or multiphase studies
   - Large prior-auth volume

2. **MRI** (brain, spine, musculoskeletal, abdominal)
   - Authorization delays from tight payer thresholds
   - Advanced imaging requirements without conservative management documentation
   - Critical for patient care timelines

3. **Diagnostic X-ray + Fluoroscopy**
   - High volume, piecemeal documentation
   - Denials impact scheduling, ED throughput, downstream referrals

### Future Phases
- Interventional radiology/vascular studies
- Advanced women's imaging (mammography, breast MRI)

## Data Sources

### 1. Clinical Documentation & Imaging Orders
- **Source**: Pilot radiology clinic/hospital partnership
- **Data Needed**:
  - De-identified imaging requests (CT, MRI)
  - Patient history (structured or free text)
  - Key fields: indication, modality, urgency, prior treatments
  - RIS (Radiology Information System) feed: completed orders + payer + CPT/ICD codes
- **Format**: Structured data feed or API integration

### 2. Payer Policy Tables
- **ACR Appropriateness Criteria**: Publicly available, modality-specific guidelines
- **CMS LCDs (Local Coverage Determinations)**: Medicare policy rules
- **Commercial Payer Medical Policies**: Major insurers (UnitedHealth, Aetna, Cigna, Blue Cross)
- **State Medicaid Policies**: State-specific authorization requirements
- **Action**: Scrape or purchase latest policy documents, codify approval criteria

### 3. Historical Denial/Authorization Outcomes
- **Source**: Pilot site historical data
- **Data Needed**:
  - Imaging orders with outcomes (approved/denied/needs more info)
  - Payer responses and denial reasons
  - Initial sample: 20-50 cases per modality for rule-based signals
- **Purpose**: Train initial risk prediction model

### 4. Clinical Guidelines & Evidence
- **ACR Guidelines**: Imaging appropriateness criteria
- **NCCN Protocols**: For oncology-related imaging
- **CMS Coverage Policies**: National and local coverage determinations
- **Published Radiology Literature**: Clinical evidence for authorization support
- **Purpose**: Provide explainable rationale for recommendations

## Core MVP Features

### 1. Approval Risk Prediction
- **Input**: Imaging order + patient history + payer
- **Output**: Risk score (Green/Yellow/Red) with confidence level
- **Logic**: Rule-based + pattern matching against historical denials

### 2. Pre-Submission Checklist
- Identifies missing documentation elements
- Specific to modality and payer
- Examples:
  - "Need documentation of failed conservative therapy"
  - "CPT 73721 requires documentation of red-flag neurologic findings"
  - "ACR criteria requires 6 weeks of physical therapy before MRI approval"

### 3. Policy Snippet Integration
- Real-time policy validation against:
  - ACR appropriateness criteria
  - CMS LCDs
  - Payer-specific medical policies
- Highlights relevant policy requirements for the specific imaging request

### 4. Audit Trail & Compliance
- Tracks all recommendations with source attribution
- Maintains compliance-ready documentation
- HIPAA-compliant data handling

## MVP Architecture

### Data Pipeline
1. **Ingestion**: RIS feed or manual order entry
2. **Policy Matching**: Query policy database for relevant rules
3. **Risk Assessment**: Apply rule-based + pattern matching logic
4. **Output Generation**: Risk score + checklist + policy snippets

### Technology Stack
- **Policy Database**: Structured storage of ACR, CMS, payer policies
- **Rule Engine**: Pattern matching and risk scoring
- **API Layer**: Integration with RIS/EHR systems
- **UI**: Simple web interface for radiology staff

## Pilot Playbook

### Target Partners
- Outpatient imaging centers (high volume, focused workflows)
- Hospital radiology departments (complex cases, multiple payers)
- Radiology service providers (multi-site, standardized processes)

### Pilot Scope
- **Duration**: 4-6 weeks
- **Modality Focus**: Start with one (e.g., MRI spine)
- **Volume**: 20-50 cases per week
- **Metrics**:
  - Reduction in denials
  - Time saved on authorization prep
  - Approval rate improvement
  - User feedback on checklist accuracy

### Success Criteria
- 80%+ accuracy in risk prediction
- 30%+ reduction in denials for pilot cases
- Positive feedback from radiology staff
- Clear path to expand to additional modalities

## Expansion Strategy

### Phase 2: Additional Modalities
- Expand to CT abdomen/chest
- Add interventional radiology procedures
- Include advanced women's imaging

### Phase 3: Other Specialties
- Oncology (imaging for cancer staging, treatment monitoring)
- Cardiology (cardiac imaging, stress tests)
- Neurology (brain imaging, stroke protocols)

## Timeline

### Weeks 1-2: Data Collection & Policy Setup
- Partner with pilot radiology center
- Ingest historical orders and outcomes
- Build policy database (ACR, CMS, major payers)

### Weeks 3-4: MVP Development
- Build rule engine and risk prediction
- Create pre-submission checklist generator
- Develop simple UI for radiology staff

### Weeks 5-6: Pilot Launch
- Deploy to pilot site
- Collect feedback and iterate
- Measure success metrics

## Key Metrics

### Technical Metrics
- Policy coverage (% of orders with matching policies)
- Risk prediction accuracy
- Response time (< 5 seconds per order)

### Business Metrics
- Denial rate reduction
- Time saved per authorization
- Approval rate improvement
- User satisfaction score

## Next Steps
1. Identify and engage pilot radiology partner
2. Set up data ingestion pipeline
3. Build policy database and rule engine
4. Develop MVP UI
5. Launch pilot and iterate

