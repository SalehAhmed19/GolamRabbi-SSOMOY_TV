import { Form, Input, Modal, Select } from "antd";
import { useState } from "react";
const CollectionCreateForm = ({ open, onCreate, onCancel }) => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const [form] = Form.useForm();
  return (
    <Modal
      open={open}
      centered
      title="কোর্স এনরোলমেন্ট"
      footer={[
        <button
          style={{
            backgroundColor: "red",
            color: "#fff",
            padding: "5px 25px",
            borderRadius: "5px",
          }}
        >
          Cancel
        </button>,
        <button
          typeof="submit"
          style={{
            backgroundColor: "#D9A017",
            padding: "5px 25px",
            borderRadius: "5px",
            marginLeft: "10px",
          }}
        >
          সাবমিট করো
        </button>,
      ]}
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: "public",
        }}
      >
        <Form.Item>
          <Select
            name="course"
            defaultValue="কোর্স নির্বাচন"
            style={{
              width: "100%",
            }}
            allowClear
            options={[
              {
                value: "মিডিয়া",
                label: "মিডিয়া",
              },
              {
                value: "লিডারশীপ",
                label: "লিডারশীপ",
              },
              {
                value: "লাইফ কোর্স",
                label: "লাইফ কোর্স",
              },
            ]}
          />
        </Form.Item>
        <Form.Item
          name="name"
          label="তোমার নাম"
          rules={[
            {
              required: true,
              message: "তুমি তোমার নাম লিখো নি!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: "তুমি তোমার ইমেইল লিখো নি!",
            },
          ]}
          name="email"
          label="তোমার ইমেইল"
        >
          <Input type="email" />
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: "তুমি তোমার ফোন নাম্বার লিখো নি!",
            },
          ]}
          name="phone"
          label="তোমার ফোন নাম্বার"
        >
          <Input />
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: "তুমি তোমার ঠিকানা লিখো নি!",
            },
          ]}
          name="address"
          label="তোমার ঠিকানা"
        >
          <Input type="address" />
        </Form.Item>
      </Form>
    </Modal>
  );
};
const CourseModal = () => {
  const [open, setOpen] = useState(false);
  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    setOpen(false);
  };
  return (
    <div>
      <button
        className="my-10 py-2 border-2 border-[#AF1453] hover:bg-[#AF1453] w-[230px] text-center rounded-full text-[#fff] text-xl"
        type="primary"
        onClick={() => {
          setOpen(true);
        }}
      >
        এনরোল করো
      </button>
      <CollectionCreateForm
        open={open}
        onCreate={onCreate}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </div>
  );
};
export default CourseModal;
