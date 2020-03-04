import * as React from "react";
export function useAddToHomescreenPrompt() {
    const [prompt, setState] = React.useState(null);
    const promptToInstall = () => {
        if (prompt) {
            alert('hola')
            return prompt.prompt();
        }
        return Promise.reject(new Error('Tried installing before browser sent "beforeinstallprompt" event'));
    };
    React.useEffect(() => {
        const ready = (e) => {
            e.preventDefault();
            setState(e);
        };
        window.addEventListener("beforeinstallprompt", ready);
        return () => {
            window.removeEventListener("beforeinstallprompt", ready);
        };
    }, []);
    return [prompt, promptToInstall];
}
