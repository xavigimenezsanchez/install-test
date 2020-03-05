import {useEffect, useState}  from "react";
let installed = false;
export function useAddToHomescreenPrompt() {
    const [prompt, setState] = useState(null);
    const [isVisible, setVisible] = useState(false);
    //const [installed, setInstalled] = useState(false);
    const promptToInstall = (callback) => {
        if (prompt) {
            //return  prompt.prompt();
            prompt.prompt();
            prompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    //setInstalled(true);
                    installed = true;
                    setVisible(false);
                }
            });
            return Promise.resolve();
        }
        return Promise.reject(new Error('Tried installing before browser sent "beforeinstallprompt" event'));
    };

    useEffect(() => {
        const ready = (e) => {
            e.preventDefault();
            if (!installed){
                setState(e);
                setVisible(true);    
            }
        };
        const hide = () => {setVisible(false)};
        window.addEventListener("beforeinstallprompt", ready);
        window.addEventListener('appinstalled', hide);
        return () => {
            window.removeEventListener("beforeinstallprompt", ready);
            window.removeEventListener("appinstalled", hide);
        };
    }, []);
    return [isVisible, setVisible, promptToInstall];
}
