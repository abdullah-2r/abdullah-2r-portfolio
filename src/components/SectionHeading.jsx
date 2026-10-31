import TextReveal from './TextReveal'

export default function SectionHeading({ eyebrow, words, className = '' }) {
  return (
    <div className={className}>
      <p className="mb-4 font-mono text-[9px] font-medium uppercase tracking-[0.12em] text-purple">
        {eyebrow}
      </p>
      <TextReveal
        as="h2"
        className="font-display text-4xl font-semibold leading-[1.02] tracking-[-0.06em] text-ink sm:text-5xl"
        words={words}
      />
    </div>
  )
}
