import React from "react";
import BannerBooking from "../../components/common/BannerBooking";
import { Form, Input, Button, Select, DatePicker, Checkbox, message } from 'antd';
import api from "../../utils/api";

const Booking = () => {
    const [serviceTypes, setServiceTypes] = React.useState([])

    React.useEffect(()=>{
        getSerivceType()
    },[])

    const getSerivceType = async() =>{
        const response = await api.get("/service-type/")
        if(response?.status == 200){
            const data = response.data.results
            const services = data.map(element => {
                return element.name
            });
            setServiceTypes(services)
        }
    }
    const onFinish = (values) => {
        // Here you can handle form submission (values contains all form data)
        console.log('Received values: ', values);
        message.success('Form submitted successfully!');
    };

    return(
        <div>
            <BannerBooking  />
            <div style={{maxWidth: 1000, margin: '0 auto', padding: '20px', backgroundColor: 'rgb(245, 245, 245)', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', marginBottom: 50 }}>
                <Form
                    name="booking_form"
                    onFinish={onFinish}
                    initialValues={{ remember: true }}
                    layout="vertical"
                >
                    <Form.Item
                        name="service"
                        label="Choose Service"
                        rules={[{ required: true, message: 'Please select a service!' }]}
                    >
                    <Select defaultValue="Select">
                        {serviceTypes.map(e => 
                            <Option value={e}>{e}</Option>
                        )}
                    </Select>
                    </Form.Item>

                    <Form.Item
                    name="date"
                    label="Choose Date & Time"
                    rules={[{ required: true, message: 'Please select a date!' }]}
                    >
                    <DatePicker format="DD/MM/YYYY" style={{ width: '100%' }} />
                    </Form.Item>

                    <Form.Item
                        name="message"
                        label="Message"
                        rules={[{ required: true, message: 'Please leave a message!' }]}
                    >
                        <Input.TextArea style={{height: 180}} placeholder="Leave us a message..." />
                    </Form.Item>

                    <Form.Item
                    name="phone"
                    label="Phone number"
                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                    >
                    <Input
                        addonBefore="AU +"
                        style={{ width: '100%' }}
                        placeholder="+61 555 000-0000"
                    />
                    </Form.Item>

                    <Form.Item name="privacy" valuePropName="checked" noStyle>
                    <Checkbox>
                        You agree to our friendly <a href="#">privacy policy</a>.
                    </Checkbox>
                    </Form.Item>

                    <Form.Item>
                    <Button type="primary" htmlType="submit" style={{ width: '100%', borderRadius: 20, marginTop: 10, padding: 20, fontWeight: "bold", backgroundColor: "#38B0CD" }}>
                        Submit
                    </Button>
                    </Form.Item>
                </Form>
                </div>
        </div>
    )

}

export default Booking;