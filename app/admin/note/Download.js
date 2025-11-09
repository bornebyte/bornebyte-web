"use client"
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { useDataExport } from '@/hooks/useDataExport'
import { DownloadIcon } from 'lucide-react'

const Download = ({ notes }) => {
    const { exportData } = useDataExport();
    return (
        <div>
            <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" aria-label="Open menu">
                        <DownloadIcon />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40" align="end">
                    <DropdownMenuGroup>
                        <DropdownMenuItem onSelect={() => exportData(notes, 'notes', 'pdf')}>
                            Download as PDF
                        </DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => exportData(notes, 'notes', 'json')}>
                            Download as JSON
                        </DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => exportData(notes, 'notes', 'csv')}>
                            Download as CSV
                        </DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => exportData(notes, 'notes', 'excel')}>
                            Download as Excel
                        </DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => exportData(notes, 'notes', 'html')}>
                            Download as HTML
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default Download