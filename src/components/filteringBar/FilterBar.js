import './FilterBar.css'

const FilterBar = ({ tag, onDeleteTag, reset }) => {

    const deleteTag = (event) => {
        onDeleteTag(event.target.innerHTML)
    }



    return (
        <div class="card-body d-flex align-items-center justify-content-center" style={{ width: "40vw", padding: "1rem", margin: "1rem auto" }}>
            {tag.map((t) => {
                return (
                    <span type="button" style={{ backgroundColor: "rgb(167 205 205)" }} class="btn btn-sm mx-1">{t}</span>
                )
            })}
            {reset ? <button type="button" onClick={(e) => deleteTag(e)} class="btn btn-outline-danger btn-sm">
                x
            </button> : null}
        </div>
    )
}

export default FilterBar;