import React from 'react';
import Container from '@material-ui/core/Container';
import NavbarTemplate from '../Content/Navbar.js';

export default function AndrewResume() {
  
 return (
     <div>
        < NavbarTemplate />
        <Container maxWidth="xl">   
            <iframe src="AndrewSaiResume.pdf" height="720px" width="100%" />
        </Container>
    </div>
  );
}
