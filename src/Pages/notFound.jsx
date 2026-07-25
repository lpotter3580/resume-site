export default function NotFound(){
    const url = window.location.href;
    return(
        <>
            <div class="bubble error404">
                <h1>404: Not Found</h1>
                <p>The address at "{url}" was not found. Try Again!</p>
            </div>
        </>
    );
}