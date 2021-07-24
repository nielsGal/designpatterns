class Page {
    showPage() : string{
        return ""
    }
}
class EnglishPage extends Page{
    showPage() : string{
        return "someHTMLpage"
    }
}
class DutchPage extends Page{
    showPage() : string{
        return "een html pagina"
    }
}
class ErrorMessage{
    showError(): string {
        return ""
    }
}
class EnglishErrorMessage extends ErrorMessage{
    showError(): string{
        return "something went wrong"
    }
}
class DutchErrorErrorMessage extends ErrorMessage{
    showError(): string{
        return "er is een fout opgetreden"
    }
}
abstract class AbstractFactory{
    abstract getErrorMessage() : ErrorMessage 
    abstract getGUIPage(): Page
}

class EnglishFactory extends AbstractFactory{
    getErrorMessage(): ErrorMessage{
        return new EnglishErrorMessage();
    }
    getGUIPage(): Page{
        return new EnglishPage();
    }
}
class DutchFactory  extends AbstractFactory{
    getErrorMessage(): ErrorMessage{
        return new DutchErrorErrorMessage();
    }
    getGUIPage(): Page{
        return new DutchPage();
    }

}
class Client{
    private factory : AbstractFactory;
    constructor(factory : AbstractFactory){
        this.factory =  factory;
    }
    showpage(): string{
        return this.factory.getGUIPage().showPage();
    }
    showError(): string{
        return this.factory.getErrorMessage().showError();
    }
}
let dutchClient = new Client(new DutchFactory());
console.log(dutchClient.showpage());
console.log(dutchClient.showError());
let englishClient = new Client(new EnglishFactory());
console.log(englishClient.showpage());
console.log(englishClient.showError());