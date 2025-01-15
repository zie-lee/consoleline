import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import VerifyCode from '../../components/VerifyCode'
import './index.less'
import { useNavigate } from 'react-router-dom';

export default (props: any) => {

    const navigate = useNavigate();
    const [mobile, setMobile] = React.useState('')

  const onFinish = (value: any) => {
    if (value.passwordII !== value.passwordI) {
      return message.error('两次密码输入不一致');
    }
    // apiPost(
    //   'user/register',
    //   {
    //     mobile: value.account,
    //     password: getMD5(value.passwordI),
    //     code: value.code
    //   }
    // ).then((res: any) => {
    //   if (res) {
    //     message.success(res)
    //     props.history.push('/')
    //   }
    // })
  }

  return (
    <div className="wrapper">
      <div className="box">
        <div className="boxTitle">注册</div>
        <Form
          onFinish={onFinish}
          onValuesChange={(values: any) => {
            if (values.account) setMobile(values.account)
          }}
        >
          <Form.Item
            name="account"
            rules={[{ required: true, message: '请输入手机号' }]}
          >
            <Input maxLength={11} size="large" placeholder="手机号" prefix={<UserOutlined />} />
          </Form.Item>
          <Form.Item
            name="passwordI"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password size="large" placeholder="用户密码" prefix={<LockOutlined />} />
          </Form.Item>
          <Form.Item
            name="passwordII"
            rules={[{ required: true, message: '请再次输入密码' }]}
          >
            <Input.Password size="large" placeholder="请再次输入密码" prefix={<LockOutlined />} />
          </Form.Item>
          <Form.Item
            name="code"
            rules={[{ required: true, message: '请输入验密码' }]}
          >
            <VerifyCode mobile={mobile} type="REGISTER" />
          </Form.Item>
          <Button size="large" className="submitBtn" type="primary" htmlType="submit">登录</Button>
        </Form>
        <span className="toRegister" onClick={() => navigate('/login')}>已有账号立即注册</span>
      </div>
    </div>
  )
}