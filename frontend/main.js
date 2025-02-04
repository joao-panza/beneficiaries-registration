const submitButton = document.querySelector('.form-submit-button');

const fetchtest = async (event) =>{
    event.preventDefault();
    try{
        const response = await fetch('http://localhost:3333/plans');
        
        if (!response.ok) {
            console.error('Failed to fetch:', response.status);
            return;
        }
    
        const test = await response.json();
        console.log(test);
    } catch (error){
        console.error('Error fetching data:', error);
    }
};

submitButton.addEventListener('click', fetchtest);