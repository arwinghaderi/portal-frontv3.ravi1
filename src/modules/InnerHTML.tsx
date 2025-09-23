interface InnerHTMLProps {
  details: string
  style?: string
}

export default function InnerHTML({ details, style }: InnerHTMLProps) {
  return (
    <div className={`rtl p-0 ${style || ''}`}>
      <div
        className="ql-editor w-full"
        style={{ color: 'inherit' }} // متن رنگش رو از والد می‌گیره
        dangerouslySetInnerHTML={{ __html: details || '' }}
      />
    </div>
  )
}
