import React, { useRef, useState } from 'react';
import { SearchOutlined,EditOutlined,DeleteOutlined } from '@ant-design/icons';
import { Button, Flex, Input, Space, Table } from 'antd';
import Highlighter from 'react-highlight-words';



const CustomerTable = ({ companyList,setIsModalVisible,handleEdit }) => {


  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };



  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1677ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'namee',
      width: '20%',
      ...getColumnSearchProps('id'),
    },
    {
      title: 'CompanyId',
      dataIndex: 'CompanyId',
      key: 'CompanyId',
      width: '20%',
      ...getColumnSearchProps('CompanyId'),
    },
    {
      title: 'companyName',
      dataIndex: 'companyName',
      key: 'companyName',
      width: '30%',
      ...getColumnSearchProps('Name'),
    },
    {
      title: 'username',
      dataIndex: 'username',
      key: 'username',
      width: '30%',
      ...getColumnSearchProps('username'),
    },
    {
      title: 'Address',
      dataIndex: 'Address',
      key: 'Address',
      width: '20%',
      ...getColumnSearchProps('Address'),
    },
    {
      title: 'Place',
      dataIndex: 'Place',
      key: 'Place',
      width: '20%',
      ...getColumnSearchProps('Place'),
    },
    {
      title: 'Pin',
      dataIndex: 'Pin',
      key: 'Pin',
      ...getColumnSearchProps('Pin'),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'PhoneNo',
      dataIndex: 'PhoneNO',
      key: 'PhoneNo',
      width: '20%',
      ...getColumnSearchProps('PhoneNo'),
    },
    {
      title: 'GST',
      dataIndex: 'GST',
      key: 'GST',
      width: '30%',
      ...getColumnSearchProps('GST'),
    },
    {
      title: 'Pan',
      dataIndex: 'Pan',
      key: 'Pan',
      width: '30%',
      ...getColumnSearchProps('Pan'),
    },
    {
      title: 'Password',
      dataIndex: 'Address',
      key: 'Address',
      width: '20%',
      ...getColumnSearchProps('Address'),
    },
    {
      title: 'CreatedBy',
      dataIndex: 'CreatedBy',
      key: 'CreatedBy',
      width: '20%',
      ...getColumnSearchProps('CreatedBy'),
    },
    {
      title: 'CreatedOn',
      dataIndex: 'CreatedOn',
      key: 'CreatedOn',
      ...getColumnSearchProps('CreatedOn'),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'ModifiedBy',
      dataIndex: 'ModifiedBy',
      key: 'ModifiedBy',
      width: '20%',
      ...getColumnSearchProps('ModifiedBy'),
    },
    {
      title: 'ModifiedOn',
      dataIndex: 'ModifiedOn',
      key: 'ModifiedOn',
      width: '30%',
      ...getColumnSearchProps('ModifiedOn'),
    },
    {
      title: 'Action',
      key: 'operation',
      // fixed: 'right',
      width: '30%',
      render: (text, record) => (
        
        <Flex gap='middle'>
          <EditOutlined onClick={() => handleEdit(record)} /> 
          <DeleteOutlined />
        </Flex>
      ),
    },

  ];




  return( 
    <>
    <Flex justify='flex-end' >
      <Button>
        <EditOutlined/>
      </Button> 
    </Flex>
    <Table
      columns={columns} 
      dataSource={companyList} 
      bordered 
      pagination={{ 
        showSizeChanger: true,  // Enable the page size changer
        pageSizeOptions: ['5', '10', '15', '100'], }} 
      scroll={{
        x: 1300,
        // y: 300,
      }}
      size='small'
      
    />
  </>
  )
};
export default CustomerTable;