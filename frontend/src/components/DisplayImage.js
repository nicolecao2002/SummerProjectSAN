import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function DisplayImage({sc}) {
  return (
    
    <Container>
      <div class = "row-6">
        <Row>
        
          <Image src={sc} rounded width = "50%"/>
      </Row>
      </div>
    </Container>
  );
}

export default DisplayImage;