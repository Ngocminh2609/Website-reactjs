import { SearchOutlined } from '@ant-design/icons';
import React from 'react';
import ButtonComponent from './../ButtonComponent/ButtonComponent';
import InputComponent from './../InputComponent/InputComponent';

const ButtonInputSearch = (props) => {
    const {
        size, placeholder,textButton,
        borderComponent='none',
        backgroundColorInput='#fff',
        backgroundColorButton='rgb(13, 92, 182)',
        colorButton = '#fff'
    } = props
    return (
        <div style={{ display: 'flex', backgroundColor: '#fff' }}>
            <InputComponent
                size={size}
                placeholder={placeholder}
                style={{ background: backgroundColorInput, border: borderComponent}}
                {...props}
            />
            <ButtonComponent
                size={size}
                icon={<SearchOutlined />}
                styleButton={{ borderRadius:'0px', background: backgroundColorButton, color: '#fff', border: borderComponent }}
                textButton={textButton}
                styleTextButton={{ color: colorButton }}
            />
        </div>
    )
}

export default ButtonInputSearch;