
export default function BackToTop({ scroll }) {

    return (
        <>
            {scroll && (
                <a href="#" data-target="html" className="scroll-to-target scroll-to-top">
                    <i className="icon-chevron" />
                </a>
            )}
        </>
    )
}