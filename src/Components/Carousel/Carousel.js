export default function Showcase() {
  return (
    <span>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://scontent.fmkc1-1.fna.fbcdn.net/v/t39.30808-6/278809197_141090328480407_6385373182321793571_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=ggPoUIiunlAAX9M6pYW&_nc_ht=scontent.fmkc1-1.fna&oh=00_AT_shrvBInMoLmBlObPhUq1nxZd6tP4nfSNGn6OB2p7LbA&oe=6331886C"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://scontent.fmkc1-1.fna.fbcdn.net/v/t39.30808-6/278866553_141089995147107_6136225463859516293_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=uLJmGLxGFysAX9DT0EJ&_nc_ht=scontent.fmkc1-1.fna&oh=00_AT_mEwanbZW1F9BbGXpV87XFNufDBU7FnEpJNvuPnNAqtQ&oe=6330DED5"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://scontent.fmkc1-1.fna.fbcdn.net/v/t39.30808-6/278863774_141089715147135_3168585526555363519_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=eMuAawPLXiYAX_GtyMV&tn=LB3FCt9yxVcVH_j8&_nc_ht=scontent.fmkc1-1.fna&oh=00_AT9iOY09PkYb01dbFJu1YHn8euS5KDd7QB0yPwufkGf2pQ&oe=6331D8DC"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://scontent.fmkc1-1.fna.fbcdn.net/v/t39.30808-6/278833362_141089558480484_3017709202190221342_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=1M-mVopuFjgAX90Oa0P&_nc_ht=scontent.fmkc1-1.fna&oh=00_AT-NbBGDbf0NpFmMpJD2d-2bstj6fKUfH3zxsEe_MZdcHQ&oe=6332755E"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </span>
  );
}
