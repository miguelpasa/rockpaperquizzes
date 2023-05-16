interface DynamicTextInputProps {
    onchange: Function
};

export const DynamicTextInput = ({ onchange } : DynamicTextInputProps) => {
    return (
        <div className="w-max">
            <form>
                <input
                    type="text"
                    onChange={ (e) => onchange(e.target.value) }
                    className="rounded-lg bg-gray-50 p-2 shadow-md "/>
            </form>
        </div>
    )
}