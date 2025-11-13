function Content({children , ...props}) {
    const className = props.className || '';

    return <div {...props} className={'content ' + className} >{children}</div>
}

export default Content;