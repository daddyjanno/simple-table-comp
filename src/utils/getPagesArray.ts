const LEFT_PAGE = -10
const RIGHT_PAGE = -5

const range = (from: number, to: number, step = 1) => {
    let i = from
    const range = []
    while (i <= to) {
        range.push(i)
        i += step
    }
    return range
}

export function getPagesArray(
    lastPage: number,
    currentPage: number,
    pageNeighbours: number
): Array<number> {
    const totalNumbers = pageNeighbours * +2
    const totalBlocks = totalNumbers + 2

    if (lastPage > totalBlocks) {
        let pages = []

        const leftBound = currentPage - pageNeighbours
        const rightBound = currentPage + pageNeighbours
        const beforeLastPage = lastPage - 1

        const startPage = leftBound > 2 ? leftBound : 2
        const endPage =
            rightBound < beforeLastPage ? rightBound : beforeLastPage

        pages = range(startPage, endPage)

        const pagesCount = pages.length
        const singleSpillOffset = totalNumbers - pagesCount - 1

        const leftSpill = startPage > 2
        const rightSpill = endPage < beforeLastPage

        const leftSpillPage = LEFT_PAGE
        const rightSpillPage = RIGHT_PAGE

        if (leftSpill && !rightSpill) {
            const extraPages = range(
                startPage - singleSpillOffset,
                startPage - 1
            )

            pages = [leftSpillPage, ...extraPages, ...pages]
        } else if (!leftSpill && rightSpill) {
            const extraPages = range(endPage + 1, endPage + singleSpillOffset)
            pages = [...pages, ...extraPages, rightSpillPage]
        } else if (leftSpill && rightSpill) {
            pages = [leftSpillPage, ...pages, rightSpillPage]
        }

        return [1, ...pages, lastPage]
    }
    return range(1, lastPage)
}
