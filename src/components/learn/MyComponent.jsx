import './style.css';
const MyComponent = () => {
  //const tester = "Add ...";
  const tester = [1, 2, 3];
  return (
    <>
      <div> {JSON.stringify(tester)} and Welcome,bro</div>
      <div className="fragment" style={{ borderRadius: '10px' }}>
        fragment
      </div>
      <div>{console.log('Magic')}</div>
    </>
  );
};
export default MyComponent;
