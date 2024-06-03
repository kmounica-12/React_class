import Accordion from 'react-bootstrap/Accordion';
// import ListComponent from '../list/list';
import ImageComponent from '../image/image';
import List2Component from '../list/list2';
import Image2Component from '../image/image2';
import ProgressBarComponent from '../progressbar/progressbar';
import SpinnerComponent from '../spinners/spinners';



function AccordionComponent() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Team#1</Accordion.Header>
        <Accordion.Body>
            {
                [{name:"RCB"},{name:"kkr"}].map((eachTeam)=>{
                    return(
                        <>
                        {/* <h1 ></h1> */}
                        <ImageComponent/>
                        <List2Component/>
                        <ProgressBarComponent/>
                        <SpinnerComponent/>
                        </>
                    )
                })
            }
            {/* <ImageComponent/>  */}
        {/* <List2Component/> */}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Team2</Accordion.Header>
        <Accordion.Body>

        {
                [{name:"mumbai indians"},{name:"delhi"}].map((eachTeam)=>{
                    return(
                        <>
                        {/* <h1 ></h1> */}
                        {/* <ImageComponent/> */}
                        <Image2Component/>
                        <List2Component/>
                        
                        </>
                    )
                })
            }
          
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionComponent;