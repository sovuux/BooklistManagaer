import { Component, Input } from '@angular/core'
import { DatePipe, NgFor, NgIf } from '@angular/common'
import { TableColumnType } from '../../../../../types/books/table-column.type'

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [NgFor, NgIf, DatePipe],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss'
})
export class DataTableComponent {
  @Input() tableData?: Record<string, any>[]
  @Input() tableColumns?: TableColumnType[]

  ngOnInit(): void {
    this.initializeDataTable()
  }

  initializeDataTable(): void {
    console.log(this.tableData)
  }

  formatDate(value: number | string | undefined): string {
    const datePipe = new DatePipe('en-US')
    return datePipe.transform(value, 'medium') || ''
  }

  getRowData(row: Record<string, any>, index: number): any {
    console.log(row)
    console.log(index)
  }
}
