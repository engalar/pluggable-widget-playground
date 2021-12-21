/**
 * This file was generated from Graph.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { EditableValue, ListValue, ListAttributeValue } from "mendix";
import { Big } from "big.js";

export interface GraphContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    sampleText: string;
    myAttribute1?: EditableValue<string>;
    myDataSource?: ListValue;
    myAttribute2?: ListAttributeValue<string | any | boolean | Date | Big>;
}

export interface GraphPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    sampleText: string;
    myAttribute1: string;
    myDataSource: {} | { type: string } | null;
    myAttribute2: string;
}
