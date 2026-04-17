import DateCell from "@/components/shared/cell/DateCell";
import { Badge } from "@/components/ui/badge";
import { IServiceSchedulePayload } from "@/types/schedule.type";
import { ColumnDef } from "@tanstack/react-table";

/* single schedule data output===========
createdAt
: 
"2026-04-17T15:33:08.971Z"
endTime
: 
"12:20 PM"
id
: 
"85ba5abc-6202-44de-b867-cc45de33f820"
isBooked
: 
false
provider
: 
{id: '7969397f-d10c-40bf-9ab0-faaa8bf03be6', userId: '3A7lg8Val0aJtE02bAOgSTOCY9qXTITn', serviceType: 'General Service', bio: null, isActive: true, …}
providerId
: 
"7969397f-d10c-40bf-9ab0-faaa8bf03be6"
scheduleDate
: 
"2026-04-26T00:00:00.000Z"
serviceRequest
: 
null
slotNumber
: 
1
startTime
: 
"09:20 AM"
updatedAt
: 
"2026-04-17T15:33:08.971Z"
*/
export const myScheduleColumns: ColumnDef<IServiceSchedulePayload>[] = [
  {
    id: "id",
    accessorKey: "id",
    header: "SS No",
    cell: ({ row }) => (
      <span className="font-mono text-xs font-semibold uppercase text-slate-500">
        #{row.original.id.slice(-6)}
      </span>
    ),
  },
  {
    id: "schedule",
    accessorKey: "schedule",
    header: "Schedule Details",
    cell: ({ row }) => {
      return (
        <div className="flex flex-col gap-1">
          <span className="font-bold text-sm text-primary line-clamp-1">
            <DateCell
              date={row.original.scheduleDate}
              formatString="MMM dd, yyyy"
            />
          </span>
          <div className="flex items-center gap-3">
            <span>{row.original.startTime}</span> {" - "}
            <span>{row.original.startTime}</span>
          </div>
        </div>
      );
    },
  },
  {
    id: "slotNumber",
    accessorKey: "slotNumber",
    header: "Slot",
    cell: ({ row }) => (
      <span className="font-mono text-xs font-semibold uppercase text-slate-500">
        {row.original.slotNumber}
      </span>
    ),
  },
  {
    id: "isBooked",
    accessorKey: "isBooked",
    header: "Booked",
    cell: ({ row }) => (
      <Badge
        variant="outline"
        className={`text-[10px] font-bold uppercase ${
          row.original.isBooked === true
            ? "bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-500/10"
            : "bg-amber-50 text-amber-600 border-amber-200 dark:bg-amber-500/10"
        }`}
      >
        {row.original.isBooked}
      </Badge>
    ),
  },

  {
    id: "createdAt",
    accessorKey: "createdAt",
    header: "Created",
    cell: ({ row }) => (
      <DateCell date={row.original.createdAt} formatString="MMM dd, yyyy" />
    ),
  },
  {
    id: "updatedAt",
    accessorKey: "updatedAt",
    header: "Updated",
    cell: ({ row }) => (
      <DateCell date={row.original.updatedAt} formatString="MMM dd, yyyy" />
    ),
  },
];
