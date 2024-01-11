import { Button, Form, Input } from 'antd';
import {FC} from 'react';
import { rules } from '../../shared/utils/rules';


type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
  };

export const LoginForm: FC = () => {

    const submit = () => {
        console.log('11')
    }

    return (
        <Form
            onFinish={submit}
        >
            <Form.Item<FieldType>
                label="Имя пользователя"
                name="username"
                rules={[rules.required('Введите имя пользователя!')]}
                >
                <Input />
            </Form.Item>

            <Form.Item<FieldType>
                label="Пароль"
                name="password"
                rules={[rules.required('Введите пароль!')]}
                >
                <Input />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Войти
                </Button>
            </Form.Item>
        </Form>
    );
};
