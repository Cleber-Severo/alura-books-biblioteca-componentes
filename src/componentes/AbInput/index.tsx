import styled from "styled-components";

const GrupoInput = styled.div`
    width: 509px;
    height: 72px;
    label {
         font-family: Arial, Helvetica, sans-serif;
         font-size: 16px;
         font-weight: 700;
         color: rgba(0, 47, 82, 1);
         display: block;
         text-align: left;
         line-height: 24px;

         margin-left: 18px;
         margin-bottom: 4px
    }
    input {
        border: 1px solid rgb(0, 47, 82);        
        border-radius: 24px;
        padding: 10px 24px 10px 24px;
        width: 100%;
        &::placeholder {
            font-family: sans-serif;
            font-size: 16px;
            font-weight: 400;
            color: rgba(164, 164, 164, 1);
        }
        &:focus{
            outline: none;
        }
    }
`

export interface AbInputProps {
    label: string,
    placeholder: string
}


export const AbInput = ({ label, placeholder }: AbInputProps) => {
    return(
       <GrupoInput>
        <label >{label}</label>
        <input type="text" placeholder={placeholder} />
       </GrupoInput>
    )
}