import './App.css'
export function App () {
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img 
        className='tw-followCard-avatar'
        alt="avatar icono" 
        src="https://unavatar.io/kikobeats?ttl=1h"/>
        <div>
          <strong>Joshua Giron</strong>
          <span>@zooper</span>
        </div>
      </header>
      <aside>
        <button>Follow</button>
      </aside>
    </article>
  )
}


