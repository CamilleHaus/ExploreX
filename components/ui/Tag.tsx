interface ITagProps {
    text: string[];
}

const Tag = ({text}: ITagProps) => {
    return (
        <>
        <span className="uppercase bg-primary py-1 px-3 text-white inline-block rounded-md text-sm self-center my-2">
            {text}
        </span>
        </>
    )
};

export default Tag;