import { createElement, useMemo } from "react";
import { ValueStatus } from 'mendix';
import { GraphContainerProps } from "../typings/GraphProps";

export default function (props: GraphContainerProps) {
    const myAttribute1 = useMemo(() => {
        if (props.myAttribute1?.status === ValueStatus.Available) {
            return props.myAttribute1.value;
        }
    }, [props.myAttribute1]);

    return <div>
        <h1>自定义组件（第一课）</h1>
        <h2><span className="alert-info panel">Default value</span>     {props.sampleText}</h2>
        <h2><span className="alert-info panel">当前组件实体上下文的字符属性</span>     {myAttribute1 ? myAttribute1 : '--'}</h2>
    </div>;
}
