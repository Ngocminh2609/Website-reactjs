import { UserOutlined, AppstoreOutlined, ShoppingCartOutlined } from '@ant-design/icons'

const CustomizedContent = (props) => {
  const {data, colors, setKeySelected } = props
  return (
    <div style={{display: 'flex', gap: '40px', justifyContent: 'center'}}>
      {Object.keys(data) && Object.keys(data)?.map((item) => {
        return (
          <div 
          key={Math.random()} 
          style={{
            width: 300,
            background:`linear-gradient(${colors[item] && colors[item][0]}, ${colors[item] && colors[item][1]})`, 
            height: 200, 
            display: 'flex', 
            gap: 20, 
            justifyContent: 'center', 
            alignItems: 'center',
            borderRadius: '10px',
            cursor: 'pointer'
          }}
            onClick={() => setKeySelected(item)}
          >
            <span style={{color: '#fff',fontSize: 30,}}>
              {item === 'users' && <UserOutlined />}
              {item === 'products' && <AppstoreOutlined />}
              {item === 'orders' && <ShoppingCartOutlined />}
            </span>
            <span style={{color: '#fff',fontSize: 30, fontWeight: 'bold', textTransform: 'uppercase',}}>{item}</span>
            <span style={{color: '#fff',fontSize: 20, fontWeight: 'bold', textTransform: 'uppercase'}}>{data[item]}</span>
          </div>
        )
      })}
    </div>
  );
};

export default CustomizedContent;