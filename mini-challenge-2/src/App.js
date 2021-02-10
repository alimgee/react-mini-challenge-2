import logo from './logo.svg';
import './App.css';
import HeaderMessage from './components/HeaderMessage'
import FooterMessage from './components/FooterMessage';
import BookStore from './components/BookStore'

function App() {
    return (
        <main className="container">
            <header className="row">
                <HeaderMessage />
                {/* UserInfo goes here */}
            </header>
            <div className="row">
                {/* BookStore goes here. It takes one prop,
                callToAction, which will appear just 
                above the books */}
                <BookStore />
            </div>
            <footer className="row">
                <FooterMessage />
            </footer>
        </main>
    );
}

export default App;
