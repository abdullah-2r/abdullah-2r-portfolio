export default function TextReveal({
  as: Tag = 'span',
  words,
  className = '',
  delay = 0,
}) {
  const accessibleText = words.map(({ text, suffix = '' }) => `${text}${suffix}`).join(' ')
  const isHeading = Tag === 'h1' || Tag === 'h2'

  return (
    <Tag
      className={`text-reveal ${className}`}
      data-text-reveal
      style={{ '--text-delay': `${delay}ms` }}
      aria-label={isHeading ? accessibleText : undefined}
    >
      {words.map(({
        text,
        suffix = '',
        className: wordClassName = '',
        breakAfter = false,
      }, index) => (
        <span className="text-reveal-unit" key={`${text}-${index}`}>
          <span
            className="text-reveal-word"
            data-text-word
            aria-hidden={isHeading ? 'true' : undefined}
            style={{ '--word-delay': `${Math.min(index * 55, 650)}ms` }}
          >
            <span className={`text-reveal-inner ${wordClassName}`}>
              {text}
              {suffix && <span className="text-purple">{suffix}</span>}
            </span>
          </span>
          {index < words.length - 1 && ' '}
          {breakAfter && <br />}
        </span>
      ))}
    </Tag>
  )
}
