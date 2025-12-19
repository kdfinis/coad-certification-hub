# Update All Modules to Clarify Standalone Status

## Changes Needed

1. **Remove "Track Credit" from enrollment options** in all modules
2. **Remove "Part of the [Track]" sections** from all modules  
3. **Add "Standalone Module Clarification" section** to all modules
4. **Remove "Track Credit" from Module Benefits** sections

## Pattern to Replace

### Enrollment Options - Remove this line:
```tsx
<li className="flex items-start gap-2">
  <CheckNodeIcon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
  <span><strong className="text-foreground">Track Credit:</strong> Counts toward [TRACK] track completion</span>
</li>
```

### Track Integration Section - Replace entire section:
```tsx
{/* Track Integration */}
<section className="section-padding bg-navy text-primary-foreground">
  ...
</section>
```

With:
```tsx
{/* Standalone Module Clarification */}
<section className="section-padding bg-muted/50">
  <div className="container-coad">
    <div className="max-w-4xl mx-auto text-center">
      <div className="bg-card rounded-xl p-8 border border-border">
        <h2 className="heading-3 mb-4">Standalone Competency Module</h2>
        <p className="body-large text-muted-foreground mb-6">
          This is a <strong>standalone competency module</strong> that is <strong>unrelated to certification tracks</strong>. 
          It can be taken independently and provides its own certificate of competency upon completion.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-8 text-left">
          <div className="bg-muted/50 rounded-lg p-6">
            <h3 className="font-semibold mb-3">This Module</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckNodeIcon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Standalone 4-week competency module</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckNodeIcon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Independent certificate of competency</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckNodeIcon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>No track enrollment required</span>
              </li>
            </ul>
          </div>
          <div className="bg-muted/50 rounded-lg p-6">
            <h3 className="font-semibold mb-3">Certification Tracks</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                <span>Structured programs (ADC or ACOS)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                <span>Progression to Charterholder status</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                <span>Separate from competency modules</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="xl" asChild>
            <Link to="/auth">Enroll Now – €[PRICE]</Link>
          </Button>
          <Button variant="outline" size="xl" asChild>
            <Link to="/certifications">Explore Certification Tracks</Link>
          </Button>
        </div>
      </div>
    </div>
  </div>
</section>
```

## Module Benefits - Remove Track Credit line:
```tsx
<li className="flex items-start gap-2">
  <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
  <span><strong className="text-foreground">Track Credit:</strong> Counts toward [TRACK] track completion</span>
</li>
```

## Files to Update (23 total)

### AAC Modules (12):
- TaskDecomposition.tsx ✅ (done)
- MultiAgentCoordination.tsx
- PerformanceOptimization.tsx
- PromptEngineering.tsx
- HumanAIDesign.tsx
- SecureAIOperations.tsx
- AIProductManagement.tsx
- DataPipelineDesign.tsx
- ModelEvaluation.tsx
- RestrictedMethods.tsx
- LatestInAI.tsx
- AIDeployment.tsx

### AIO Modules (12):
- EthicalDataUse.tsx
- PrivacyAuditor.tsx
- CrisisPrevention.tsx
- LegalAuditor.tsx
- ResourceManagement.tsx
- ProcessOptimization.tsx
- SustainabilityAI.tsx
- FinancialEvaluations.tsx
- AIForGovernment.tsx
- AIForSecurity.tsx
- CybersecurityAuditing.tsx
- AMLKYC.tsx

