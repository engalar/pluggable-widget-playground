import { createElement, useMemo } from "react";
import { ValueStatus } from 'mendix';
import { GraphContainerProps } from "../typings/GraphProps";

export default function (props: GraphContainerProps) {
    const myAttribute1 = useMemo(() => {
        if (props.myAttribute1?.status === ValueStatus.Available) {
            return props.myAttribute1.value;
        }
    }, [props.myAttribute1]);

    const data = useMemo(() => {
        if (props.myDataSource?.status === ValueStatus.Available) {
            return props.myDataSource.items;
        }
    }, [props.myDataSource]);

    return <div>
        <h1>自定义组件（第一课）</h1>
        <h2><span className="alert-info panel">Default value</span>     {props.sampleText}</h2>
        <h2><span className="alert-info panel">当前组件实体上下文的字符属性</span>     {myAttribute1 ? myAttribute1 : '--'}</h2>
        <h2>
            <span className="alert-info panel">列表</span>
            <ul>
                {
                    data?.map(item => <li><button>{props.myAttribute2?.get(item).value}</button></li>)
                }
            </ul>
        </h2>
    </div>;
}
