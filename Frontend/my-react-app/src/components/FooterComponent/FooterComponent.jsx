import { Col } from 'antd';
import React from 'react';
import { WrapperFooter, WrapperTextFooter } from './style';
import { FacebookFilled, InstagramFilled, TwitterSquareFilled } from '@ant-design/icons';

const FooterComponent = () => {
    return (
        <WrapperFooter>
            <Col span={8}>
                <h2>Thông tin</h2>
                <div>
                    <WrapperTextFooter>Về chúng tôi</WrapperTextFooter>
                    <WrapperTextFooter>Chính sách bảo mật</WrapperTextFooter>
                    <WrapperTextFooter>Điều khoản & Điều kiện</WrapperTextFooter>
                </div>
            </Col>
            <Col span={8}>
                <h2>Hỗ trợ</h2>
                <WrapperTextFooter>Liên hệ</WrapperTextFooter>
                <WrapperTextFooter>Câu hỏi thường gặp</WrapperTextFooter>
            </Col>
            <Col span={8}>
                <h2>Theo dõi chúng tôi</h2>
                <div>
                <WrapperTextFooter>
                    <FacebookFilled style={{marginRight: '5px'}} />
                    Facebook
                </WrapperTextFooter>
                <WrapperTextFooter>
                    <InstagramFilled style={{marginRight: '5px'}} />
                    Instagram
                </WrapperTextFooter>
                <WrapperTextFooter>
                    <TwitterSquareFilled style={{marginRight: '5px'}} />
                    Twitter
                </WrapperTextFooter>
                </div>
            </Col>
        </WrapperFooter>
    );
}

export default FooterComponent;