function Footer() {
    const year = new Date().getFullYear();
    return (
      <footer>
   
        <p color="green">Copyright ⓒ {year}</p>
      
      </footer>
    );
  }
  
  export default Footer;