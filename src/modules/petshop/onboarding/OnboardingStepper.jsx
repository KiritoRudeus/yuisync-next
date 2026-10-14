import { Check } from 'lucide-react'

export function OnboardingStepper({ currentStep, steps }) {
  return (
    <ol aria-label="Progresso da configuração" className="grid gap-2 sm:grid-cols-4">
      {steps.map((step, index) => {
        const number = index + 1
        const complete = currentStep > number
        const active = currentStep === number
        return (
          <li key={step} aria-current={active ? 'step' : undefined} className={`flex min-w-0 items-center gap-2 rounded-xl border px-3 py-2.5 text-xs font-bold ${active ? 'border-[var(--primary)] bg-[var(--primary-bg-light)] text-[var(--primary)]' : 'border-[var(--border2)] bg-surface text-muted'}`}>
            <span className={`grid h-6 w-6 shrink-0 place-items-center rounded-full ${complete ? 'bg-[var(--primary)] text-white' : 'border border-current'}`}>
              {complete ? <Check size={13} /> : number}
            </span>
            <span className="truncate">{step}</span>
          </li>
        )
      })}
    </ol>
  )
}

