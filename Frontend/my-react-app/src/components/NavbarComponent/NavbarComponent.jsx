import { Checkbox, Rate } from 'antd';
import React from 'react';
import { WrapperContent, WrapperLableText, WrapperTextPrice, WrapperTextValue } from './style';

const NavBarComponent = () => {
    const onChange = () => { };

    const renderContent = (type, options) => {
        switch (type) {
            case 'text':
                return options.map((option, index) => {
                    return (
                        <WrapperTextValue key={index}>{option}</WrapperTextValue>
                    );
                });
            case 'checkbox':
                return (
                    <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }} onChange={onChange}>
                        {options.map((option, index) => {
                            return (
                                <Checkbox key={index} style={{ marginLeft: 0 }} value={option.value}>{option.label}</Checkbox>
                            );
                        })}
                    </Checkbox.Group>
                );
            case 'star':
                return options.map((option, index) => {
                    return (
                        <div key={index} style={{ display: 'flex' }}>
                            <Rate style={{ fontSize: '12px' }} disabled defaultValue={option} />
                            <span> {`từ ${option}  sao`}</span>
                        </div>
                    );
                });
            case 'price':
                return options.map((option, index) => {
                    return (
                        <WrapperTextPrice key={index}>{option}</WrapperTextPrice>
                    );
                });
            default:
                return null;
        }
    };

    return (
        <div>
            <WrapperLableText>Danh mục</WrapperLableText>
            <WrapperContent>
                {renderContent('text', ['Giày nam', 'Giày nữ', 'Quần jean nam', 'Quần jogger nam', 'Quần nữ', 'Áo Croptop nữ', 'Áo khoác nam', 'Áo phông nữ', 'Áo polo nam', 'Áo sơ mi nam', 'Áo vest nam'])}
            </WrapperContent>
        </div>
    );
};

export default NavBarComponent;
