import "./StatusBar.css"

export type StatusBarProp = {
    text: string
}

export default function StatusBar(props: StatusBarProp) {
    return <div id="statusbar">{ props.text }</div>
}