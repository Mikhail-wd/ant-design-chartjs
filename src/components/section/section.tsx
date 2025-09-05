import type { ReactNode } from "react"
import "./sectionStyles.scss"

type sectionProps = {
    children?: ReactNode | string
}

export default function Section(props:sectionProps) {
    return (
        <section className="section-frame">
            {props?.children}
        </section>
    )
}