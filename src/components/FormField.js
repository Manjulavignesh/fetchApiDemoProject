import { Form ,FormControl} from "react-bootstrap"
const FormField = () => {
  return (
    <Form>
      <Form.Group>
        <Form.Label style={{float:"left"}}>Title</Form.Label><br/>
        <FormControl style={{width:500,height:28,marginLeft:3}}type="text" /><br/>
        <Form.Label style={{float:"left",margin:10}}>OpeningText</Form.Label><br/>
        <FormControl style={{width:500,height:100,marginLeft:3}} as="textarea"/><br/>
        <Form.Label style={{float:"left",margin:10}}>ReleseDate</Form.Label><br/>
        <FormControl style={{width:500,height:28,marginLeft:3}} type="number"/>

      </Form.Group>
    </Form>
  );
};
export default FormField;
