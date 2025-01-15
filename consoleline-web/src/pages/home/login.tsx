import React from 'react';
import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.less'

export default (props: any) => {

  const navigate = useNavigate();

  console.log(props);

  const onFinish = (value: { mobile: string, password: string, }) => {
    // apiPost('user/login', {
    //   mobile: value.mobile,
    //   password: getMD5(value.password)
    // }).then(res => {
    //   if (res) {
    //     setToken(res.token)
    //     setUser(res)
    //     props.history.push('project/list')
    //   }
    // })
  }

  return (
    <div className='wrapper'>
      <div className="box">
        <div className="boxTitle">登录</div>
        <Form
          name="basic"
          onFinish={onFinish}
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="mobile"
            rules={[{ required: true, message: '请输入账号' }]}
          >
            <Input size="large" placeholder="用户账号" prefix={<UserOutlined />} />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password size="large" placeholder="用户密码" prefix={<LockOutlined />} />
          </Form.Item>
          <Button size="large" className="submitBtn" type="primary" htmlType="submit">登录</Button>
        </Form>
        <span className="toRegister" onClick={() => navigate('/register')}>还没账号？立即注册</span>
      </div>
    </div>
  )
}