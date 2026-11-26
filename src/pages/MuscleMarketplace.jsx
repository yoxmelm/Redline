import { useEffect, useMemo, useState } from 'react'
import yoxmelPhoto from '../assets/team/yoxmel.jpeg'
import jhostingPhoto from '../assets/team/jhosting.jpeg'
import juanPhoto from '../assets/team/juan.jpeg'
import neomarPhoto from '../assets/team/neomar.jpeg'

const cars = [
  { id: 1, brand: 'Ford', model: 'Mustang GT', year: 2024, type: 'Coupé', price: 58900, oldPrice: 62900, power: '480 HP', engine: '5.0 V8', transmission: 'Manual', mileage: '1 240 km', image: 'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1200&q=85', featured: true },
  { id: 2, brand: 'Chevrolet', model: 'Camaro ZL1', year: 2023, type: 'Coupé', price: 72900, oldPrice: 76900, power: '650 HP', engine: '6.2 V8', transmission: 'Automática', mileage: '8 900 km', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=85', featured: true },
  { id: 3, brand: 'Dodge', model: 'Challenger SRT', year: 2022, type: 'Coupé', price: 64800, oldPrice: 68900, power: '717 HP', engine: '6.2 V8', transmission: 'Automática', mileage: '12 600 km', image: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Dodge_Challenger_SRT8_%282015%29_Hirschaid-20220709-RM-120221.jpg', featured: true },
  { id: 4, brand: 'Shelby', model: 'GT500', year: 2021, type: 'Coupé', price: 81900, oldPrice: null, power: '760 HP', engine: '5.2 V8', transmission: 'Doble embrague', mileage: '15 200 km', image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=85', featured: false },
  { id: 5, brand: 'Chevrolet', model: 'Corvette Stingray', year: 2024, type: 'Sport', price: 94900, oldPrice: null, power: '495 HP', engine: '6.2 V8', transmission: 'Automática', mileage: '3 100 km', image: 'https://upload.wikimedia.org/wikipedia/commons/1/17/2024_Chevrolet_Corvette_Stingray_R_coupe%2C_front_right%2C_05-26-2025.jpg', featured: false },
  { id: 6, brand: 'Dodge', model: 'Charger R/T', year: 2023, type: 'Sedán', price: 55900, oldPrice: 59900, power: '370 HP', engine: '5.7 V8', transmission: 'Automática', mileage: '6 700 km', image: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&w=1200&q=85', featured: false },
  { id: 7, brand: 'Dodge', model: 'Charger SRT Hellcat', year: 2023, type: 'Sedán', price: 84900, oldPrice: null, power: '797 HP', engine: '6.2 V8', transmission: 'Automática', mileage: '4 800 km', image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1200&q=85', featured: true },
  { id: 8, brand: 'Ford', model: 'Mach 1', year: 2022, type: 'Coupé', price: 61900, oldPrice: 65900, power: '480 HP', engine: '5.0 V8', transmission: 'Manual', mileage: '9 350 km', image: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Ford_Mustang_VI_Mach_1_1X7A0304.jpg', featured: false },
  { id: 9, brand: 'Chevrolet', model: 'Chevelle SS', year: 1970, type: 'Clásico', price: 129900, oldPrice: null, power: '450 HP', engine: '7.4 V8', transmission: 'Manual', mileage: '21 400 km', image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=85', featured: true },
  { id: 10, brand: 'Dodge', model: 'Challenger Demon', year: 2019, type: 'Coupé', price: 139900, oldPrice: null, power: '840 HP', engine: '6.2 V8', transmission: 'Automática', mileage: '7 200 km', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=85', featured: true },
  { id: 11, brand: 'Ford', model: 'Mustang Shelby GT350', year: 2020, type: 'Coupé', price: 72900, oldPrice: 76900, power: '526 HP', engine: '5.2 V8', transmission: 'Manual', mileage: '11 800 km', image: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&w=1200&q=85', featured: false },
  { id: 12, brand: 'Pontiac', model: 'GTO Judge', year: 1969, type: 'Clásico', price: 149900, oldPrice: null, power: '370 HP', engine: '6.6 V8', transmission: 'Automática', mileage: '18 100 km', image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=85', featured: false },
  { id: 13, brand: 'Ford', model: 'Mustang Dark Horse', year: 2024, type: 'Coupé', price: 69900, oldPrice: null, power: '500 HP', engine: '5.0 V8', transmission: 'Manual', mileage: '1 900 km', image: 'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1200&q=85', featured: true },
  { id: 14, brand: 'Dodge', model: 'Charger Daytona', year: 2025, type: 'Eléctrico', price: 78900, oldPrice: null, power: '670 HP', engine: 'Dual Motor', transmission: 'Directa', mileage: '650 km', image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1200&q=85', featured: true },
  { id: 15, brand: 'Chevrolet', model: 'Camaro SS', year: 2024, type: 'Coupé', price: 52900, oldPrice: 56900, power: '455 HP', engine: '6.2 V8', transmission: 'Automática', mileage: '5 400 km', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=85', featured: false },
  { id: 16, brand: 'Shelby', model: 'GT350 Heritage', year: 2018, type: 'Coupé', price: 68900, oldPrice: null, power: '526 HP', engine: '5.2 V8', transmission: 'Manual', mileage: '14 200 km', image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=85', featured: false },
  { id: 17, brand: 'Plymouth', model: 'Barracuda Hemi', year: 1971, type: 'Clásico', price: 189900, oldPrice: null, power: '425 HP', engine: '7.0 V8', transmission: 'Manual', mileage: '26 300 km', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85', featured: true },
  { id: 18, brand: 'Buick', model: 'GSX Stage 1', year: 1970, type: 'Clásico', price: 159900, oldPrice: null, power: '360 HP', engine: '7.5 V8', transmission: 'Automática', mileage: '19 600 km', image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=85', featured: false },
  { id: 19, brand: 'Cadillac', model: 'CT5-V Blackwing', year: 2024, type: 'Sedán', price: 96900, oldPrice: null, power: '668 HP', engine: '6.2 V8', transmission: 'Manual', mileage: '2 700 km', image: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Cadillac_CT5-V_Blackwing_6DC79_Black_Raven_%2813%29.jpg', featured: true },
  { id: 20, brand: 'Chevrolet', model: 'Monte Carlo SS', year: 1972, type: 'Clásico', price: 74900, oldPrice: null, power: '240 HP', engine: '6.6 V8', transmission: 'Automática', mileage: '32 500 km', image: 'https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=1200&q=85', featured: false },
]

const categories = ['Todos', 'Coupé', 'Sport', 'Sedán', 'Clásico', 'Eléctrico']

const heroSlides = [
  { image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1900&q=90', year: '2024', model: 'Ford Mustang Dark Horse' },
  { image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1900&q=90', year: '2023', model: 'Chevrolet Camaro ZL1' },
  { image: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Dodge_Challenger_SRT8_%282015%29_Hirschaid-20220709-RM-120221.jpg', year: '2022', model: 'Dodge Challenger SRT' },
  { image: 'https://upload.wikimedia.org/wikipedia/commons/1/17/2024_Chevrolet_Corvette_Stingray_R_coupe%2C_front_right%2C_05-26-2025.jpg', year: '2024', model: 'Chevrolet Corvette Stingray' }
]

function MuscleMarketplace() {
  const [category, setCategory] = useState('Todos')
  const [query, setQuery] = useState('')
  const [favorites, setFavorites] = useState([])
  const [menuOpen, setMenuOpen] = useState(false)
  const [team] = useState(initialTeam)
  const [sellModalOpen, setSellModalOpen] = useState(false)
  const [sellSubmitted, setSellSubmitted] = useState(false)
  const [sellForm, setSellForm] = useState({ brand: '', model: '', year: '', mileage: '', price: '', name: '', phone: '', email: '' })
  const [sellImages, setSellImages] = useState([])
  const [selectedCar, setSelectedCar] = useState(null)
  const [heroIndex, setHeroIndex] = useState(0)
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false)
  const [inquirySubmitted, setInquirySubmitted] = useState(false)
  const [inquiryForm, setInquiryForm] = useState({ name: '', phone: '', email: '', interest: 'Información general', message: '' })

  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      const matchesCategory = category === 'Todos' || car.type === category
      const matchesQuery = `${car.brand} ${car.model}`.toLowerCase().includes(query.toLowerCase())
      return matchesCategory && matchesQuery
    })
  }, [category, query])

  const toggleFavorite = (id) => {
    setFavorites((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id])
  }

  const openSellModal = () => {
    setSellSubmitted(false)
    setSellImages([])
    setSellModalOpen(true)
  }

  const handleSellChange = (field, value) => {
    setSellForm((current) => ({ ...current, [field]: value }))
  }

  const handleSellImages = (event) => {
    const selectedFiles = Array.from(event.target.files || [])
    const imageFiles = selectedFiles.filter((file) => file.type.startsWith('image/')).slice(0, 8)

    setSellImages((current) => {
      current.forEach((item) => URL.revokeObjectURL(item.preview))
      return imageFiles.map((file) => ({ file, preview: URL.createObjectURL(file), name: file.name }))
    })
  }

  const removeSellImage = (index) => {
    setSellImages((current) => {
      URL.revokeObjectURL(current[index].preview)
      return current.filter((_, itemIndex) => itemIndex !== index)
    })
  }

  const submitSellForm = (event) => {
    event.preventDefault()
    setSellSubmitted(true)
  }

  const closeSellModal = () => {
    setSellImages((current) => {
      current.forEach((item) => URL.revokeObjectURL(item.preview))
      return []
    })
    setSellModalOpen(false)
  }

  const openInquiryModal = (car) => {
    setSelectedCar(null)
    setInquirySubmitted(false)
    setInquiryForm({
      name: '',
      phone: '',
      email: '',
      interest: 'Información general',
      message: `Me interesa conocer más sobre el ${car.brand} ${car.model} ${car.year}.`
    })
    setInquiryModalOpen(true)
  }

  const handleInquiryChange = (field, value) => {
    setInquiryForm((current) => ({ ...current, [field]: value }))
  }

  const submitInquiryForm = (event) => {
    event.preventDefault()
    setInquirySubmitted(true)
  }

  const closeInquiryModal = () => {
    setInquiryModalOpen(false)
  }

  useEffect(() => {
    const heroTimer = window.setInterval(() => {
      setHeroIndex((current) => (current + 1) % heroSlides.length)
    }, 5500)

    return () => window.clearInterval(heroTimer)
  }, [])

  return (
    <main className="auto-page">
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Ir al inicio">
          <span className="brand-mark"><i className="ri-roadster-fill"></i></span>
          <span>REDLINE</span>
        </a>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#inventario" onClick={() => setMenuOpen(false)}>Inventario</a>
          <a href="#marcas" onClick={() => setMenuOpen(false)}>Marcas</a>
          <a href="#financiacion" onClick={() => setMenuOpen(false)}>Financiación</a>
          <a href="#servicio" onClick={() => setMenuOpen(false)}>Servicio</a>
          <a href="#equipo" onClick={() => setMenuOpen(false)}>Equipo</a>
        </nav>

        <div className="nav-actions">
          <button className="icon-button" aria-label="Autos favoritos"><i className="ri-heart-3-line"></i><span>{favorites.length}</span></button>
          <button className="sell-button" onClick={openSellModal}>Vender mi auto</button>
          <button className="menu-button" onClick={() => setMenuOpen((open) => !open)} aria-label="Abrir menú"><i className={menuOpen ? 'ri-close-line' : 'ri-menu-line'}></i></button>
        </div>
      </header>

      <section className="hero" id="inicio">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.image}
            className={index === heroIndex ? 'hero-slide active' : 'hero-slide'}
            style={{ backgroundImage: `url('${slide.image}')` }}
            aria-hidden={index !== heroIndex}
          ></div>
        ))}
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="eyebrow"><span></span> Selección exclusiva 2026</div>
          <h1>Encuentra tu próximo <em>icono.</em></h1>
          <p>Muscle cars originales, importados y revisados. Potencia real, historia verificable y entrega en todo el país.</p>
          <div className="search-panel">
            <label>
              <span>Marca o modelo</span>
              <div><i className="ri-search-line"></i><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Ej. Mustang, Camaro..." /></div>
            </label>
            <button onClick={() => document.getElementById('inventario')?.scrollIntoView({ behavior: 'smooth' })}>Buscar vehículos <i className="ri-arrow-right-line"></i></button>
          </div>
        </div>
        <div className="hero-spec">
          <span>{String(heroIndex + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}</span>
          <strong>{heroSlides[heroIndex].year}</strong>
          <small>{heroSlides[heroIndex].model}</small>
        </div>
        <div className="hero-controls" aria-label="Selector de imagen principal">
          {heroSlides.map((slide, index) => (
            <button
              type="button"
              key={slide.model}
              className={index === heroIndex ? 'active' : ''}
              onClick={() => setHeroIndex(index)}
              aria-label={`Mostrar ${slide.model}`}
            ></button>
          ))}
        </div>
      </section>

      <section className="brand-strip" id="marcas" aria-label="Marcas disponibles">
        {['FORD', 'CHEVROLET', 'DODGE', 'SHELBY', 'CORVETTE', 'PONTIAC', 'PLYMOUTH', 'BUICK', 'CADILLAC'].map((brand) => <button key={brand}>{brand}</button>)}
      </section>

      <section className="inventory" id="inventario">
        <div className="section-heading">
          <div>
            <span className="section-kicker">Catálogo disponible</span>
            <h2>Máquinas que dejan huella</h2>
          </div>
        </div>

        <div className="filters">
          {categories.map((item) => (
            <button className={category === item ? 'active' : ''} key={item} onClick={() => setCategory(item)}>{item}</button>
          ))}
          <button className="filter-button"><i class="ri-equalizer-line"></i> Filtros</button>
        </div>

        <div className="car-grid">
          {filteredCars.map((car) => (
            <article className="car-card" key={car.id}>
              <div className="car-image" onClick={() => setSelectedCar(car)} role="button" tabIndex={0} onKeyDown={(event) => event.key === 'Enter' && setSelectedCar(car)}>
                <img src={car.image} alt={`${car.brand} ${car.model}`} />
                {car.featured && <span className="featured-label">Destacado</span>}
                <button className={favorites.includes(car.id) ? 'favorite active' : 'favorite'} onClick={() => toggleFavorite(car.id)} aria-label="Añadir a favoritos"><i className={favorites.includes(car.id) ? 'ri-heart-fill' : 'ri-heart-line'}></i></button>
              </div>
              <div className="car-info">
                <div className="car-title"><div><span>{car.brand}</span><h3 onClick={() => setSelectedCar(car)} role="button" tabIndex={0} onKeyDown={(event) => event.key === 'Enter' && setSelectedCar(car)}>{car.model}</h3></div><span className="year">{car.year}</span></div>
                <div className="specs">
                  <div><i className="ri-speed-up-line"></i><span>Potencia<b>{car.power}</b></span></div>
                  <div><i className="ri-settings-4-line"></i><span>Motor<b>{car.engine}</b></span></div>
                  <div><i className="ri-route-line"></i><span>Kilometraje<b>{car.mileage}</b></span></div>
                </div>
                <div className="car-footer">
                  <div><span>Desde</span><strong>${car.price.toLocaleString('en-US')}</strong>{car.oldPrice && <del>${car.oldPrice.toLocaleString('en-US')}</del>}</div>
                  <button type="button" onClick={() => setSelectedCar(car)} aria-label={`Ver detalles de ${car.brand} ${car.model}`}><i className="ri-arrow-right-up-line"></i></button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredCars.length === 0 && <div className="empty-state"><i className="ri-roadster-line"></i><h3>No encontramos ese vehículo</h3><p>Prueba con Mustang, Camaro, Challenger o Dodge.</p></div>}
      </section>

      <section className="performance" id="financiacion">
        <div className="performance-content">
          <span className="section-kicker light">Tu siguiente movimiento</span>
          <h2>Rinde al máximo desde el primer arranque.</h2>
          <p>Financiación flexible, revisión técnica de 150 puntos y garantía para que solo te preocupes por elegir el camino.</p>
          <button>Calcula tu financiación <i className="ri-arrow-right-line"></i></button>
        </div>
        <div className="performance-stats">
          <div><strong>150</strong><span>Puntos revisados</span></div>
          <div><strong>12</strong><span>Meses de garantía</span></div>
          <div><strong>48h</strong><span>Entrega disponible</span></div>
        </div>
      </section>

      <section className="service" id="servicio">
        <div>
          <span className="section-kicker">Compra sin sorpresas</span>
          <h2>Vehículos con historia. Experiencia sin fricción.</h2>
        </div>
        <div className="service-grid">
          <article><i class="ri-shield-check-line"></i><h3>Historial verificado</h3><p>Revisión documental y técnica completa antes de publicar.</p></article>
          <article><i class="ri-exchange-dollar-line"></i><h3>Financia tu auto</h3><p>Planes adaptados a tu presupuesto y aprobación ágil.</p></article>
          <article><i class="ri-truck-line"></i><h3>Entrega a domicilio</h3><p>Llevamos tu vehículo hasta la puerta de tu hogar.</p></article>
        </div>
      </section>

      <section className="team-section" id="equipo">
        <div className="team-heading">
          <div>
            <span className="section-kicker">Autores del proyecto</span>
            <h2>El equipo detrás de REDLINE</h2>
          </div>
        </div>

        <div className="team-grid">
          {team.map((member, index) => (
            <article className="team-card" key={member.id}>
              <span className="team-number">0{index + 1}</span>
              <div className="team-avatar">
                <img src={member.image} alt={`Foto de ${member.name}`} />
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </article>
          ))}
        </div>
      </section>

      {sellModalOpen && (
        <div className="sell-modal" role="dialog" aria-modal="true" aria-labelledby="sell-modal-title">
          <div className="sell-modal-panel">
            {!sellSubmitted ? (
              <>
                <div className="sell-modal-heading">
                  <div>
                    <span className="section-kicker">Tasación rápida</span>
                    <h3 id="sell-modal-title">Vende tu muscle car</h3>
                  </div>
                  <button type="button" onClick={closeSellModal} aria-label="Cerrar"><i className="ri-close-line"></i></button>
                </div>

                <form className="sell-form" onSubmit={submitSellForm}>
                  <div className="sell-fields">
                    <label>Marca<input required value={sellForm.brand} onChange={(event) => handleSellChange('brand', event.target.value)} placeholder="Ej. Ford" /></label>
                    <label>Modelo<input required value={sellForm.model} onChange={(event) => handleSellChange('model', event.target.value)} placeholder="Ej. Mustang GT" /></label>
                    <label>Año<input required type="number" min="1950" max="2026" value={sellForm.year} onChange={(event) => handleSellChange('year', event.target.value)} placeholder="2024" /></label>
                    <label>Kilometraje<input required value={sellForm.mileage} onChange={(event) => handleSellChange('mileage', event.target.value)} placeholder="12.500 km" /></label>
                    <label>Precio esperado<input required value={sellForm.price} onChange={(event) => handleSellChange('price', event.target.value)} placeholder="$ 58.900" /></label>
                    <label>Nombre<input required value={sellForm.name} onChange={(event) => handleSellChange('name', event.target.value)} placeholder="Tu nombre" /></label>
                    <label>Teléfono<input required type="tel" value={sellForm.phone} onChange={(event) => handleSellChange('phone', event.target.value)} placeholder="+1 555 000 000" /></label>
                    <label>Correo<input required type="email" value={sellForm.email} onChange={(event) => handleSellChange('email', event.target.value)} placeholder="tu@correo.com" /></label>
                  </div>
                  <div className="sell-images">
                    <label>Imágenes del auto
                      <input type="file" accept="image/*" multiple onChange={handleSellImages} />
                    </label>
                    <div className="image-previews">
                      {sellImages.map((image, index) => (
                        <div className="image-preview" key={index}>
                          <img src={image.preview} alt={image.name} />
                          <button type="button" className="remove-image" onClick={() => removeSellImage(index)} aria-label="Eliminar imagen"><i className="ri-close-line"></i></button>
                        </div>
                      ))}
                    </div>
                  </div>
                  <button className="sell-submit" type="submit">Solicitar tasación <i className="ri-arrow-right-line"></i></button>
                </form>
              </>
            ) : (
              <div className="sell-success">
                <div className="sell-success-icon"><i className="ri-check-line"></i></div>
                <span className="section-kicker">Solicitud recibida</span>
                <h3>Tu vehículo está en revisión</h3>
                <p>Redline contactará a {sellForm.name} para preparar una tasación.</p>
                <button type="button" onClick={closeSellModal}>Volver al marketplace</button>
              </div>
            )}
          </div>
        </div>
      )}

      {selectedCar && (
        <div className="car-detail-modal" role="dialog" aria-modal="true" aria-labelledby="car-detail-title">
          <div className="car-detail-panel">
            <button type="button" className="car-detail-close" onClick={() => setSelectedCar(null)} aria-label="Cerrar detalles"><i className="ri-close-line"></i></button>

            <div className="car-detail-image">
              <img src={selectedCar.image} alt={`${selectedCar.brand} ${selectedCar.model}`} />
              {selectedCar.featured && <span className="featured-label">Destacado</span>}
            </div>

            <div className="car-detail-content">
              <div className="car-detail-heading">
                <div>
                  <span className="section-kicker">{selectedCar.brand} · {selectedCar.year}</span>
                  <h2 id="car-detail-title">{selectedCar.model}</h2>
                </div>
                <div className="car-detail-price">
                  <span>Precio</span>
                  <strong>${selectedCar.price.toLocaleString('en-US')}</strong>
                </div>
              </div>

              <p className="car-detail-description">
                Un {selectedCar.brand} {selectedCar.model} diseñado para ofrecer carácter, potencia y una experiencia de conducción inolvidable. Vehículo revisado y disponible para entrega inmediata.
              </p>

              <div className="car-detail-specs">
                <div><i className="ri-speed-up-line"></i><span>Potencia<b>{selectedCar.power}</b></span></div>
                <div><i className="ri-settings-4-line"></i><span>Motor<b>{selectedCar.engine}</b></span></div>
                <div><i className="ri-route-line"></i><span>Kilometraje<b>{selectedCar.mileage}</b></span></div>
                <div><i className="ri-settings-3-line"></i><span>Transmisión<b>{selectedCar.transmission}</b></span></div>
                <div><i className="ri-calendar-line"></i><span>Año<b>{selectedCar.year}</b></span></div>
                <div><i className="ri-roadster-line"></i><span>Tipo<b>{selectedCar.type}</b></span></div>
              </div>

              <div className="car-detail-actions">
                <button type="button" className="detail-primary" onClick={() => openInquiryModal(selectedCar)}>Solicitar información <i className="ri-arrow-right-line"></i></button>
                <button type="button" className="detail-secondary" onClick={() => toggleFavorite(selectedCar.id)}>
                  <i className={favorites.includes(selectedCar.id) ? 'ri-heart-fill' : 'ri-heart-line'}></i>
                  {favorites.includes(selectedCar.id) ? 'En favoritos' : 'Añadir a favoritos'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {inquiryModalOpen && (
        <div className="inquiry-modal" role="dialog" aria-modal="true" aria-labelledby="inquiry-modal-title">
          <div className="inquiry-modal-panel">
            {!inquirySubmitted ? (
              <>
                <div className="inquiry-modal-heading">
                  <div>
                    <span className="section-kicker">Consulta de compra</span>
                    <h3 id="inquiry-modal-title">Estamos aquí para ayudar</h3>
                  </div>
                  <button type="button" onClick={closeInquiryModal} aria-label="Cerrar"><i className="ri-close-line"></i></button>
                </div>

                <form className="inquiry-form" onSubmit={submitInquiryForm}>
                  <div className="inquiry-fields">
                    <label>Nombre<input required value={inquiryForm.name} onChange={(event) => handleInquiryChange('name', event.target.value)} placeholder="Tu nombre" /></label>
                    <label>Teléfono<input required type="tel" value={inquiryForm.phone} onChange={(event) => handleInquiryChange('phone', event.target.value)} placeholder="+1 555 000 000" /></label>
                    <label>Correo<input required type="email" value={inquiryForm.email} onChange={(event) => handleInquiryChange('email', event.target.value)} placeholder="tu@correo.com" /></label>
                    <label>Interés
                      <select value={inquiryForm.interest} onChange={(event) => handleInquiryChange('interest', event.target.value)}>
                        <option value="Información general">Información general</option>
                        <option value="Disponibilidad">Disponibilidad</option>
                        <option value="Precio">Precio</option>
                        <option value="Otros">Otros</option>
                      </select>
                    </label>
                    <label>Mensaje
                      <textarea value={inquiryForm.message} onChange={(event) => handleInquiryChange('message', event.target.value)} placeholder="Escribe tu mensaje aquí..."></textarea>
                    </label>
                  </div>
                  <button className="inquiry-submit" type="submit">Enviar consulta <i className="ri-arrow-right-line"></i></button>
                </form>
              </>
            ) : (
              <div className="inquiry-success">
                <div className="inquiry-success-icon"><i className="ri-check-line"></i></div>
                <span className="section-kicker">Consulta enviada</span>
                <h3>Gracias por tu interés</h3>
                <p>Nos pondremos en contacto contigo pronto.</p>
                <button type="button" onClick={closeInquiryModal}>Volver al inicio</button>
              </div>
            )}
          </div>
        </div>
      )}

      <footer>
        <div className="footer-main">
          <div><a className="brand footer-brand" href="#inicio"><span className="brand-mark"><i className="ri-roadster-fill"></i></span><span>REDLINE</span></a><p>El marketplace de muscle cars diseñado para quienes buscan más que transporte.</p></div>
          <div><h4>Explorar</h4><a href="#inventario">Inventario</a><a href="#marcas">Marcas</a><a href="#financiacion">Financiación</a><a href="#equipo">Equipo</a></div>
          <div className="newsletter"><h4>Recibe nuevas llegadas</h4><div><input type="email" placeholder="Tu correo electrónico" /><button aria-label="Suscribirse"><i className="ri-arrow-right-line"></i></button></div></div>
        </div>
        <div className="footer-bottom"><span>© 2026 Redline Marketplace</span><span>Diseño y personalización: Yoxmel Morles y equipo</span></div>
      </footer>
    </main>
  )
}

const initialTeam = [
  { id: 1, name: 'Yoxmel Morles', role: 'Estudiante', image: yoxmelPhoto },
  { id: 2, name: 'Jhosting Bermudez', role: 'Estudiante', image: jhostingPhoto },
  { id: 3, name: 'Juan Gutierrez', role: 'Estudiante', image: juanPhoto },
  { id: 4, name: 'Neomar Castro', role: 'Estudiante', image: neomarPhoto },
]

export default MuscleMarketplace
