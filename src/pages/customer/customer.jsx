import React, { useState } from 'react';
import { Button, Checkbox, Flex, Form, Input, Modal } from 'antd';
import CustomerTable from './customer-table';
import CustomerForm from './customer-form';



const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};





const Customer = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalVisible(true);
  };


 
  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        console.log('Form values:', values);
        // Handle form submission here
        setIsModalVisible(false);
        form.resetFields();
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  
  
return(
  <>
    <Flex vertical gap='middle'>
      <Flex justify='flex-end'>
        <Button type="primary" onClick={showModal}>Create Company</Button>
      </Flex>
      <CustomerTable />
    </Flex>

    <Modal
        title="Create Company"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Submit"
        cancelText="Cancel"
      >
      <CustomerForm form={form}/>
    </Modal>
  </>
  )
};
export default Customer;


