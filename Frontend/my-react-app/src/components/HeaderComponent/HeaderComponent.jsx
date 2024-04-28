import {
    CaretDownOutlined,
    ShoppingCartOutlined,
    UserOutlined
} from '@ant-design/icons';
import { Badge, Col, Popover } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ButttonInputSearch from '../../components/ButtonInputSearch/ButtonInputSearch';
import { searchProduct } from '../../redux/slides/productSlide';
import { resetUser } from '../../redux/slides/userSlide';
import * as UserService from '../../services/UserService';
import Loading from '../LoadingComponent/Loading';
import { WrapperContentPopup, WrapperHeader, WrapperHeaderAccount, WrapperTextHeader, WrapperTextHeaderSmall } from './style';


    const HeaderComponent = ({ isHiddenSearch = false, isHiddenCart = false }) => {
    const navigate = useNavigate()
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const [userName, setUserName] = useState('')
    const [userAvatar, setUserAvatar] = useState('')
    const [setSearch] = useState('')
    const [isOpenPopup, setIsOpenPopup] = useState(false)
    const order = useSelector((state) => state.order)
    const [loading, setLoading] = useState(false)
    const handleNavigateLogin = () => {
        navigate('/sign-in')
    }

    const handleLogout = async () => {
        setLoading(true)
        await UserService.logoutUser()
        dispatch(resetUser())
        setLoading(false)
    }

    useEffect(() => {
        setLoading(true)
        setUserName(user?.name)
        setUserAvatar(user?.avatar)
        setLoading(false)
    }, [user?.name, user?.avatar])

    const content = (
        <div>
        <WrapperContentPopup onClick={() => handleClickNavigate('profile')}>Thông tin người dùng</WrapperContentPopup>
        {user?.isAdmin && (

            <WrapperContentPopup onClick={() => handleClickNavigate('admin')}>Quản lí hệ thống</WrapperContentPopup>
        )}
        <WrapperContentPopup onClick={() => handleClickNavigate(`my-order`)}>Đơn hàng của tôi</WrapperContentPopup>
        <WrapperContentPopup onClick={() => handleClickNavigate()}>Đăng xuất</WrapperContentPopup>
        </div>
    );

    const handleClickNavigate = (type) => {
        if(type === 'profile') {
        navigate('/profile-user')
        }else if(type === 'admin') {
        navigate('/system/admin')
        }else if(type === 'my-order') {
        navigate('/my-order',{ state : {
            id: user?.id,
            token : user?.access_token
            }
        })
        }else {
        handleLogout()
        navigate('/')
        }
        setIsOpenPopup(false)
    }

    const onSearch = (e) => {
        if (setSearch) {
            setSearch(e.target.value);
            }
        
            if (dispatch) {
            dispatch(searchProduct(e.target.value));
            }
        };

    return (
        <div>
            <WrapperHeader style={{ justifyContent: isHiddenSearch && isHiddenSearch ? 'space-between' : 'unset' }}>
                <Col span={5}>
                <WrapperTextHeader onClick={() => {navigate('/')}}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="https://png.pngtree.com/png-vector/20220514/ourmid/pngtree-hanger-logo-clothes-sale-clean-vector-png-image_45997036.jpg"
                        alt="NMSHOP logo"
                        style={{ marginRight: '5px', height: '30px', borderRadius: '100%' }} />
                        <span>NMSHOP</span>
                    </div>
                </WrapperTextHeader>
                </Col>
                {!isHiddenSearch && (
                <Col span={13}>
                    <ButttonInputSearch
                    size="large"
                    textButton="Tìm kiếm"
                    placeholder="Nhập sản phẩm cần tìm..."
                    onChange={onSearch}
                    />
                </Col>
                )}
                <Col span={6} style={{ display: 'flex', gap: '54px', alignItems: 'center' }}>
                <Loading isLoading={loading}>
                    <WrapperHeaderAccount>
                    {userAvatar ? (
                        <img src={userAvatar} alt="avatar" style={{
                        height: '30px',
                        width: '30px',
                        borderRadius: '50%',
                        objectFit: 'cover'
                        }} />
                    ) : (
                        <UserOutlined style={{ fontSize: '30px' }} />
                    )}
                    {user?.access_token ? (
                        <>
                        <Popover content={content} trigger="click" open={isOpenPopup}>
                            <div style={{ cursor: 'pointer',maxWidth: 100, overflow: 'hidden', textOverflow: 'ellipsis' }} onClick={() => setIsOpenPopup((prev) => !prev)}>{userName?.length ? userName : user?.email}</div>
                        </Popover>
                        </>
                    ) : (
                        <div onClick={handleNavigateLogin} style={{ cursor: 'pointer' }}>
                        <WrapperTextHeaderSmall>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
                        <div>
                            <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                            <CaretDownOutlined />
                        </div>
                        </div>
                    )}
                    </WrapperHeaderAccount>
                </Loading>
                {!isHiddenCart && (
                    <div onClick={() => navigate('/order')} style={{cursor: 'pointer'}}>
                    <Badge count={order?.orderItems?.length} size="small">
                        <ShoppingCartOutlined style={{ fontSize: '30px', color: '#fff' }} />
                    </Badge>
                    <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
                    </div>
                )}
                </Col>
            </WrapperHeader>
        </div>
    )
}

export default HeaderComponent