import { useEffect } from "react"

const useTitle = title => {

    useEffect(() => {

        document.title = `${title} -Memorable Journeys`







    }, [title])


};


export default useTitle;