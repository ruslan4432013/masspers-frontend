export const ContactMap = () => {
  return (
    <div className="relative overflow-hidden mt-[84px] md:mt-[93px]">
      <a
        href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps"
        style={{
          color: '#eee',
          fontSize: '12px',
          position: 'absolute',
          top: '0px',
        }}
      >
        Москва
      </a>
      <a
        href="https://yandex.ru/maps/geo/moskva/53166393/?indoorLevel=1&ll=37.616891%2C55.755632&utm_medium=mapframe&utm_source=maps&z=17.56"
        style={{
          color: '#eee',
          fontSize: '12px',
          position: 'absolute',
          top: '14px',
        }}
      >
        Москва — Яндекс Карты
      </a>
      <iframe
        src="https://yandex.ru/map-widget/v1/?indoorLevel=1&ll=37.616891%2C55.755632&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzE2NjM5MxIa0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAiCg14eBZCFfUFX0I%2C&z=17.56"
        width="560"
        height="400"
        allowFullScreen
        style={{ position: 'relative', width: '100%' }}
      ></iframe>
    </div>
  )
}
