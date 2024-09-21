function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="text-white tracking-wider items-center justify-center flex py-4">
      {" "}
      Copyright ©️ {year} made with ❤️ by{" "}
      <a className="mx-2" href="https://github.com/AnonSols">
        {" "}
        <b>Egede</b>
      </a>
    </footer>
  );
}

export default Footer;
