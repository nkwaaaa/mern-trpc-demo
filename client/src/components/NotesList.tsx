import { trpc } from "../trpc"

export default function NotesList() {
    const notes = trpc.note.get.useQuery()

    return (
        <div>
            {JSON.stringify(notes.data)}
        </div>
    )
}