function CourseCard (props) {
    return (
        <div className="p-1 flex flex-col space-y-1 border-solid border-2 border-black max-w-80 min-w-80 container">
            <p id="courseTitle" className="text-sm text-end mr-2 font-semibold">{props.courseName}</p>
            <div className="flex flex-row flex-space-x-4 p-1 max-h-32">
                <img className="basis-1/4 p-1 rounded-sm" src={props.courseImage} alt="course image"/>
                <p className="container basis-3/4 p-1 text-left self-center text-ellipsis ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies nunc id justo imperdiet dignissim.</p>
            </div>
            <a href={props.courseLink} className="text-xs text-end mr-2 text-blue-600 font-medium underline">Ver...</a>
        </div>
    );
}

export default CourseCard;